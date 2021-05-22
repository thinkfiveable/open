/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-props-no-spreading */
import Link from "next/link";

const CustomLink = (props) => {
    const { href } = props;
    const isInternalLink = href && (href.startsWith("/") || href.startsWith("#"));

    if (isInternalLink) {
        return (
            <Link href={href}>
                <a {...props} className="font-semibold hover:text-gray-500 underline">{props.children}</a>
            </Link>
        );
    }

    return (
        <a
            target="_blank"
            className="font-semibold hover:text-gray-500 underline"
            rel="noopener noreferrer"
            {...props}>
            {props.children}
        </a>
    );
};

const CustomHeader = (props) => {
    return (
        <h1 className="text-5xl font-bold font-rubik leading-loose" {...props}>
            {props.children}
        </h1>
    );
};

const CustomSubheading = (props) => {
    return (
        <h2 className="text-3xl font-medium font-rubik mt-4 mb-2 md:mb-0 md:leading-loose" {...props}>
            {props.children}
        </h2>
    );
};

const UnorderedList = (props) => {
    return (
        <ul className="list-disc list-inside" {...props}>
            {props.children}
        </ul>
    );
};

const OrderedList = (props) => {
    return (
        <ol className="list-decimal list-inside" {...props}>
            {props.children}
        </ol>
    );
};

const MDXComponents = {
    h1: CustomHeader,
    h2: CustomSubheading,
    a: CustomLink,
    ul: UnorderedList,
    ol: OrderedList
};

export default MDXComponents;
