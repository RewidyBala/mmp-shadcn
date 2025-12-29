import { SelectOption } from "@/model/common";

/**
 * Map combobox value to API payload
 * (Backend expects ID only)
 */
export function mapSelectValueToApi<T extends string | number>(
  value: T,
  apiKey: string
): Record<string, T> {
  return {
    [apiKey]: value,
  };
}

/**
 * Map full ComboboxOption to API object
 * (Backend expects id + name)
 */
export function mapSelectToApi<T extends string | number>(
  option: SelectOption<T>,
  apiKeys: {
    valueKey: string;
    labelKey: string;
  }
): Record<string, T | string> {
  return {
    [apiKeys.valueKey]: option.value,
    [apiKeys.labelKey]: option.label,
  };
}

/**
 * Multi-select reverse mapper
 */
export function mapMultiSelectToApi<T extends string | number>(
  values: T[],
  apiKey: string
): Record<string, T[]> {
  return {
    [apiKey]: values,
  };
}
