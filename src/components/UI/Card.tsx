import Button from "./Button"
import Text from "./Text"


const cardVariants = {
    default: 'w-2xs h-max p-3 bg-[#ff5e62] rounded-sm',
    custom: ''
}

type Variant = keyof typeof cardVariants

type CardProps = {
    imageUrl?: string,
    className?: string,
    title?: string,
    variant?: Variant,
    alt?: string,
    children?: React.ReactNode
}

export default function Card({ imageUrl, children, className, variant = "default", title, alt }: CardProps) {
    return (
        <div className={`"${className ? className : ''} ${cardVariants[variant]}`}>
            <div className="overflow-hidden rounded-sm">
                <img className="h-30 w-full" src={imageUrl} alt={alt} />
            </div>
            <div className="pt-3">
                <Text as="h2" className="font-bold text-lg" >
                    {title}
                </Text>
                <hr className="my-3 text-[#ca4346]" />
                <Text className="text-gray-200 text-sm">
                    {children}
                </Text>
                <Button className="flex rounded-xs mt-3" variant="primary"><a href="">Ver Projeto</a></Button>
            </div>
        </div>
    )
}