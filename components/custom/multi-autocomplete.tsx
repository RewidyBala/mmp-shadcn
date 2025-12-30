import React, { useEffect } from "react";
import {
  Combobox,
  ComboboxChip,
  ComboboxChips,
  ComboboxChipsInput,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxItem,
  ComboboxList,
  ComboboxValue,
  useComboboxAnchor,
} from "@/components/ui/combobox";
import { SelectProps } from "@/model/common";
import { useTranslations } from "next-intl";

export function MultiAutocomplete({
  options,
  placeholder,
  emptyLabel = "noItemsFound",
  onChange,
  value,
  disabled = false,
}: SelectProps) {
  const t = useTranslations("common");
  const anchor = useComboboxAnchor();

  const [defaultValues] = React.useState<any[]>(() =>
    options.filter((o) => Array.isArray(value) && value.includes(o.value))
  );

  return (
    <Combobox
      multiple
      autoHighlight
      items={options}
      disabled={disabled}
      defaultValue={defaultValues}
      onValueChange={(values) => {
        onChange(values.map((v: any) => v.value));
      }}
    >
      <ComboboxChips ref={anchor}>
        <ComboboxValue>
          {(values) => (
            <React.Fragment>
              {values.map((value: any, index: number) => (
                <ComboboxChip key={index}>{value.label}</ComboboxChip>
              ))}
              <ComboboxChipsInput
                disabled={disabled}
                placeholder={placeholder}
              />
            </React.Fragment>
          )}
        </ComboboxValue>
      </ComboboxChips>
      <ComboboxContent anchor={anchor}>
        <ComboboxEmpty>{t(emptyLabel)}</ComboboxEmpty>
        <ComboboxList>
          {(item, index) => (
            <ComboboxItem key={index} value={item} showIndicator>
              {item.label}
            </ComboboxItem>
          )}
        </ComboboxList>
      </ComboboxContent>
    </Combobox>
  );
}
