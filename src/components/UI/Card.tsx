import Text from "./Text"

type CardProps = {
    imageUrl?: string,
    className?: string,
    title?: string,
    alt?: string,
    children?: React.ReactNode
}

export default function Card({ imageUrl, children, className, title, alt, ...props }: CardProps) {
    return (
        <div className="w-2xs h-2xs bg-amber-200 rounded-sm">
            <div>
                <img src={imageUrl} alt={alt} />
            </div>
            <div>
                <Text as="h2" >
                    {title}
                </Text>
                <Text>
                    {children}
                </Text>
            </div>
        </div>
    )
}