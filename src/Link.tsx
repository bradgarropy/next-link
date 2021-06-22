import NextLink from "next/link"
import React, {FC} from "react"

type LinkProps = {
    to: string
}

const Link: FC<LinkProps> = ({to, children, ...props}) => {
    if (to.startsWith("/")) {
        return (
            <NextLink href={to} {...props}>
                {children}
            </NextLink>
        )
    }

    return (
        <a href={to} target="_blank" rel="noopener noreferrer" {...props}>
            {children}
        </a>
    )
}

export default Link
