import React from "react";
import {
  Combobox,
  ComboboxChip,
  ComboboxChips,
  ComboboxChipsInput,
  ComboboxCollection,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxGroup,
  ComboboxInput,
  ComboboxItem,
  ComboboxLabel,
  ComboboxList,
  ComboboxSeparator,
  ComboboxTrigger,
  ComboboxValue,
  useComboboxAnchor,
} from "@/components/ui/combobox";
import { SelectProps } from "@/@types/common";
import { useTranslations } from "next-intl";

export function Autocomplete({
  options,
  placeholder,
  emptyLabel = "noItemsFound",
  onChange,
  value,
  disabled = false,
}: SelectProps) {
  const t = useTranslations("common");

  const selectedOption = React.useMemo(
    () => options.find((o) => o.value === value) ?? null,
    [options, value]
  );

  return (
    <Combobox
      items={options}
      value={selectedOption}
      onValueChange={(value) => {
        onChange(value?.value ?? null);
      }}
    >
      <ComboboxInput placeholder={placeholder} disabled={disabled} />
      <ComboboxContent>
        <ComboboxEmpty>{t(emptyLabel)}</ComboboxEmpty>
        <ComboboxList>
          {(item) => (
            <ComboboxItem key={item.label} value={item} showIndicator={false}>
              {item.label}
            </ComboboxItem>
          )}
        </ComboboxList>
      </ComboboxContent>
    </Combobox>
  );
}
