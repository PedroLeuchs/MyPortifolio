import * as React from "react";
import classNames from "classnames";
import * as Accordion from "@radix-ui/react-accordion";
import { AiOutlineDown } from "react-icons/ai";
import "../styles/Accordion.css";

interface AccordionDemoProps {
  titles: string[];
  texts: string[];
}

const AccordionDemo: React.FC<AccordionDemoProps> = ({ titles, texts }) => (
  <Accordion.Root
    className="lg:w-[60%] w-full max-h-full min-h-1/2 rounded-md gap-10 flex flex-col lg:justify-end justify-start "
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
        "group flex h-[45px] p-5 flex-1 cursor-pointer items-center justify-between bg-mauve1 px-5 lg:text-4xl md:text-3xl text-2xl leading-none text-white lg:shadow-[0_1px_0] lg:shadow-mauve6 outline-none hover:bg-mauve2",
        className
      )}
      {...props}
      ref={forwardedRef}
    >
      {children}
      <AiOutlineDown
        className="text-white transition-transform duration-300 ease-[cubic-bezier(0.87,_0,_0.13,_1)] group-data-[state=open]:rotate-180"
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
      "accordion-content lg:text-lg md:text-base text-sm font-normal ",
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
