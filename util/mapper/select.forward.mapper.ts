import { SelectOption } from "@/model/common";

function mapToSelectOption<
  TItem,
  TValue extends keyof TItem,
  TLabel extends keyof TItem
>(
  item: TItem,
  valueKey: TValue,
  labelKey: TLabel
): SelectOption<TItem[TValue]> {
  return {
    value: item[valueKey],
    label: String(item[labelKey]),
  };
}

export function mapListToSelect<
  TItem,
  TValue extends keyof TItem,
  TLabel extends keyof TItem
>(
  items: TItem[],
  valueKey: TValue,
  labelKey: TLabel
): SelectOption<TItem[TValue]>[] {
  return items.map((item) => mapToSelectOption(item, valueKey, labelKey));
}
