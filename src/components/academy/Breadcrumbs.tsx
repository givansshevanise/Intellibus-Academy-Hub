import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

import {
  Breadcrumb,
  BreadcrumbItem as BreadcrumbPrimitiveItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator
} from "../ui/breadcrumb";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

export interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <Breadcrumb className="academy-container pt-8">
      <BreadcrumbList>
        {items.map((item, index) => {
          const current = index === items.length - 1;

          return (
            <BreadcrumbPrimitiveItem key={`${item.label}-${index}`}>
              {item.href && !current ? (
                <BreadcrumbLink asChild>
                  <Link to={item.href}>{item.label}</Link>
                </BreadcrumbLink>
              ) : (
                <BreadcrumbPage>{item.label}</BreadcrumbPage>
              )}
              {!current ? (
                <BreadcrumbSeparator>
                  <ChevronRight aria-hidden="true" size={16} />
                </BreadcrumbSeparator>
              ) : null}
            </BreadcrumbPrimitiveItem>
          );
        })}
      </BreadcrumbList>
    </Breadcrumb>
  );
}
