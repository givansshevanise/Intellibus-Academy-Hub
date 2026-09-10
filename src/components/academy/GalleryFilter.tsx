import { Tabs, TabsList, TabsTrigger } from "../ui/tabs";

export interface GalleryFilterOption {
  label: string;
  value: string;
}

export interface GalleryFilterProps {
  options: GalleryFilterOption[];
  value: string;
  onChange: (value: string) => void;
  label?: string;
}

export function GalleryFilter({
  label = "Filter photos",
  onChange,
  options,
  value
}: GalleryFilterProps) {
  return (
    <Tabs aria-label={label} onValueChange={onChange} value={value}>
      <TabsList>
      {options.map((option) => {
        return (
          <TabsTrigger
            key={option.value}
            value={option.value}
          >
            {option.label}
          </TabsTrigger>
        );
      })}
      </TabsList>
    </Tabs>
  );
}
