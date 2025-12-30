/**
 * API Usage Examples
 *
 * This file demonstrates how to use the axios and SWR utilities
 */

import { useApi, usePost, usePut, useDelete, api } from "@/lib/api";

// ============================================
// Type Definitions
// ============================================

interface User {
  id: string;
  name: string;
  email: string;
}

interface Post {
  id: string;
  title: string;
  content: string;
  userId: string;
}

// ============================================
// 1. Fetching Data with SWR (GET)
// ============================================

export function UserProfile({ userId }: { userId: string }) {
  const { data, error, isLoading, mutate } = useApi<User>(`/users/${userId}`);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  if (!data) return null;

  return (
    <div>
      <h1>{data.name}</h1>
      <p>{data.email}</p>
      <button onClick={() => mutate()}>Refresh</button>
    </div>
  );
}

// ============================================
// 2. Creating Data with POST Mutation
// ============================================

export function CreatePost() {
  const { trigger, isMutating, error } = usePost<Post, Partial<Post>>("/posts");

  const handleSubmit = async (postData: Partial<Post>) => {
    try {
      const result = await trigger(postData);
      console.log("Post created:", result);
    } catch (err) {
      console.error("Failed to create post:", err);
    }
  };

  return (
    <button
      onClick={() => handleSubmit({ title: "New Post", content: "Content" })}
    >
      {isMutating ? "Creating..." : "Create Post"}
    </button>
  );
}

// ============================================
// 3. Updating Data with PUT Mutation
// ============================================

export function UpdateUser({ userId }: { userId: string }) {
  const { trigger, isMutating } = usePut<User, Partial<User>>(
    `/users/${userId}`
  );

  const handleUpdate = async (userData: Partial<User>) => {
    try {
      await trigger(userData);
      console.log("User updated");
    } catch (err) {
      console.error("Failed to update user:", err);
    }
  };

  return (
    <button onClick={() => handleUpdate({ name: "Updated Name" })}>
      {isMutating ? "Updating..." : "Update User"}
    </button>
  );
}

// ============================================
// 4. Deleting Data with DELETE Mutation
// ============================================

export function DeletePost({ postId }: { postId: string }) {
  const { trigger, isMutating } = useDelete<void>(`/posts/${postId}`);

  const handleDelete = async () => {
    try {
      await trigger();
      console.log("Post deleted");
    } catch (err) {
      console.error("Failed to delete post:", err);
    }
  };

  return (
    <button onClick={handleDelete}>
      {isMutating ? "Deleting..." : "Delete Post"}
    </button>
  );
}

// ============================================
// 5. Direct API Calls (without SWR caching)
// ============================================

export async function directApiCall() {
  try {
    // GET request
    const users = await api.get<User[]>("/users");
    console.log("Users:", users);

    // POST request
    const newUser = await api.post<User>("/users", {
      name: "John Doe",
      email: "john@example.com",
    });
    console.log("Created user:", newUser);

    // PUT request
    const updatedUser = await api.put<User>(`/users/${newUser.id}`, {
      name: "Jane Doe",
    });
    console.log("Updated user:", updatedUser);

    // DELETE request
    await api.delete(`/users/${newUser.id}`);
    console.log("User deleted");
  } catch (error) {
    console.error("API call failed:", error);
  }
}

// ============================================
// 6. Conditional Fetching
// ============================================

export function ConditionalFetch({
  shouldFetch,
  userId,
}: {
  shouldFetch: boolean;
  userId: string;
}) {
  // Pass null to disable fetching
  const { data, error, isLoading } = useApi<User>(
    shouldFetch ? `/users/${userId}` : null
  );

  if (!shouldFetch) return <div>Not fetching</div>;
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return <div>{data?.name}</div>;
}

// ============================================
// 7. Pagination Example
// ============================================

import { usePaginated } from "@/lib/api";

interface PaginatedResponse<T> {
  data: T[];
  total: number;
  page: number;
  limit: number;
}

export function PaginatedPosts() {
  const [page, setPage] = useState(1);
  const { data, error, isLoading } = usePaginated<PaginatedResponse<Post>>(
    "/posts",
    page,
    10
  );

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      {data?.data.map((post) => (
        <div key={post.id}>{post.title}</div>
      ))}
      <button onClick={() => setPage(page - 1)} disabled={page === 1}>
        Previous
      </button>
      <button onClick={() => setPage(page + 1)}>Next</button>
    </div>
  );
}

// ============================================
// 8. Query Parameters Example
// ============================================

import { useApiWithParams } from "@/lib/api";
import { useState } from "react";

export function FilteredPosts() {
  const [filters, setFilters] = useState({
    status: "published",
    author: "john",
  });

  const { data, error, isLoading } = useApiWithParams<Post[]>(
    "/posts",
    filters
  );

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      {data?.map((post) => (
        <div key={post.id}>{post.title}</div>
      ))}
    </div>
  );
}
