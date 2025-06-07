
const buttonVariants = {
    default: 'text-white bg-[#ff5e62] px-3 py-2 cursor-pointer',
}

type Variant = keyof typeof buttonVariants;

type ButtonProps = {
    className?: string;
    children?: React.ReactNode;
    variant?: Variant;
}

export default function Button({ children, className, variant = 'default', ...props }: ButtonProps) {

    const variantClass = buttonVariants[variant]
    return (
        <button className={`${className ? className : ''} ${variantClass}`} {...props}>{children}</button>
    )
}