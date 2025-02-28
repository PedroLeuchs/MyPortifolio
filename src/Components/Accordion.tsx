import * as React from "react";
import classNames from "classnames";
import * as Accordion from "@radix-ui/react-accordion";
import { AiOutlineDown } from "react-icons/ai";

interface AccordionDemoProps {
  titles: string[];
  texts: string[];
}

const AccordionDemo: React.FC<AccordionDemoProps> = ({ titles, texts }) => (
  <Accordion.Root
    className="w-[60%] max-h-full min-h-1/2 rounded-md bg-mauve6 shadow-[0_2px_10px] shadow-black/5 gap-10 flex flex-col "
    type="single"
    defaultValue={`item-0`}
    collapsible
  >
    {titles.map((title, index) => (
      <AccordionItem value={`item-${index}`} key={index}>
        <AccordionTrigger>{title}</AccordionTrigger>
        <AccordionContent>{texts[index]}</AccordionContent>
      </AccordionItem>
    ))}
  </Accordion.Root>
);

type AccordionItemProps = React.ComponentPropsWithoutRef<typeof Accordion.Item>;
const AccordionItem = React.forwardRef<HTMLDivElement, AccordionItemProps>(
  ({ children, className, ...props }, forwardedRef) => (
    <Accordion.Item
      className={classNames(
        "overflow-hidden first:mt-0 first:rounded-t last:rounded-b ",
        className
      )}
      {...props}
      ref={forwardedRef}
    >
      {children}
    </Accordion.Item>
  )
);
AccordionItem.displayName = "AccordionItem";

type AccordionTriggerProps = React.ComponentPropsWithoutRef<
  typeof Accordion.Trigger
>;
const AccordionTrigger = React.forwardRef<
  HTMLButtonElement,
  AccordionTriggerProps
>(({ children, className, ...props }, forwardedRef) => (
  <Accordion.Header className="flex">
    <Accordion.Trigger
      className={classNames(
        "group flex h-[45px] p-5 flex-1 cursor-default items-center justify-between bg-mauve1 px-5 text-4xl leading-none text-violet11 shadow-[0_1px_0] shadow-mauve6 outline-none hover:bg-mauve2",
        className
      )}
      {...props}
      ref={forwardedRef}
    >
      {children}
      <AiOutlineDown
        className="text-violet10 transition-transform duration-300 ease-[cubic-bezier(0.87,_0,_0.13,_1)] group-data-[state=open]:rotate-180"
        aria-hidden
      />
    </Accordion.Trigger>
  </Accordion.Header>
));
AccordionTrigger.displayName = "AccordionTrigger";

type AccordionContentProps = React.ComponentPropsWithoutRef<
  typeof Accordion.Content
>;
const AccordionContent = React.forwardRef<
  HTMLDivElement,
  AccordionContentProps
>(({ children, className, ...props }, forwardedRef) => (
  <Accordion.Content
    className={classNames(
      "overflow-hidden bg-mauve2 text-[15px] text-mauve11 data-[state=closed]:animate-slideUp data-[state=open]:animate-slideDown font-normal",
      className
    )}
    {...props}
    ref={forwardedRef}
  >
    <div className="px-5 py-[15px]">{children}</div>
  </Accordion.Content>
));
AccordionContent.displayName = "AccordionContent";

export default AccordionDemo;
