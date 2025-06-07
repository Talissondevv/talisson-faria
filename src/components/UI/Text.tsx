import React, { type JSX } from "react";

const textVariants = {
    default: 'text-[#EBEBEB]',
    muted: 'text-[#6B6B6B]',
    none: ''
}

type Variant = keyof typeof textVariants;

type TextProps = {
    as?: keyof JSX.IntrinsicElements;
    className?: string;
    variant?: Variant;
    children?: React.ReactNode;
};

export default function Text({ as = 'span', className, variant = 'default', children, ...props }: TextProps) {

    const variantClass = textVariants[variant];

    return React.createElement(
        as,
        {
            className: `${variantClass} ${className ? className : ''}`,
            ...props
        },
        children
    )
}