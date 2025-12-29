export interface SelectOption<T = string | number> {
  /** Value submitted to form / backend */
  value: T;

  /** Label shown to user */
  label: string;

  /** Disable option */
  disabled?: boolean;

  /** Optional grouping (Country, State, etc.) */
  group?: string;

  /** Extra metadata for UI logic */
  meta?: Record<string, unknown>;
}

/**
 * Common props contract for Combobox components
 * Keeps components dumb and reusable
 */
export interface SelectProps<T = string | number | null | undefined> {
  /** Selected value */
  value?: T | T[] | null;

  /** Options list */
  options: SelectOption<T>[];

  /** Change handler */
  onChange: (value: T | T[] | null) => void;

  /** Placeholder text */
  placeholder?: string;

  /** Disable entire combobox */
  disabled?: boolean;

  /** Loading state */
  loading?: boolean;

  /** Empty state label */
  emptyLabel?: string;
}

/**
 * Multi-select variant
 */
export interface MultiSelectProps<T = string | number> {
  /** Selected values */
  value: T[];

  /** Options list */
  options: SelectOption<T>[];

  /** Change handler */
  onChange: (value: T[]) => void;

  placeholder?: string;
  disabled?: boolean;
  loading?: boolean;
}
