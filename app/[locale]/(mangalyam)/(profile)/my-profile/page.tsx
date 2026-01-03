import {
  ScrollableTabContent,
  ScrollableTabs,
} from "@/components/ui/scrollable-tabs";
import { NameCard } from "./components/name-card";
import { PROFILE_TABS } from "@/util/constants";
import BasicDetails from "./components/basic-details";

const page = () => {
  return (
    <div className="flex flex-col gap-6">
      <NameCard></NameCard>
      <ScrollableTabs tabs={PROFILE_TABS}>
        <ScrollableTabContent>
          <BasicDetails></BasicDetails>
        </ScrollableTabContent>
      </ScrollableTabs>
    </div>
  );
};

export default page;
