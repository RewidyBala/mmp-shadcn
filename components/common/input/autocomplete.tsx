import React, { useEffect, useEffectEvent } from "react";
import {
  Combobox,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
} from "@/components/ui/combobox";
import { SelectProps } from "@/@types/common";
import { useTranslations } from "next-intl";
import { tr } from "date-fns/locale";

export function Autocomplete({
  options,
  placeholder,
  emptyLabel = "common.noItemsFound",
  onChange,
  value,
  disabled = false,
}: SelectProps) {
  const t = useTranslations();
  const translatedOptions = React.useMemo(
    () =>
      options.map((option) => ({
        label: t(option.label),
        value: option.value,
      })),
    [options, t]
  );
  // const selectedOption = React.useMemo(
  //   () => translatedOptions.find((o) => o.value === value) ?? null,
  //   [translatedOptions, value]
  // );

  const [defaultValue, setDefaultValue] = React.useState<any>(
    translatedOptions.find((o) => o.value === value) || null
  );

  return (
    <Combobox
      items={translatedOptions}
      onValueChange={(item: any) => onChange?.(item?.value)}
      defaultValue={defaultValue}
    >
      <ComboboxInput placeholder={placeholder} disabled={disabled} />

      <ComboboxContent>
        <ComboboxEmpty>{t(emptyLabel)}</ComboboxEmpty>

        <ComboboxList>
          {(item) => (
            <ComboboxItem key={item.value} value={item} showIndicator={false}>
              {item.label}
            </ComboboxItem>
          )}
        </ComboboxList>
      </ComboboxContent>
    </Combobox>
  );
}
