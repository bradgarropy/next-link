import NextLink from "next/link"
import React, {FC, HTMLAttributes} from "react"

type LinkProps = {
    to: string
} & HTMLAttributes<HTMLAnchorElement>

const Link: FC<LinkProps> = ({to, children, ...props}) => {
    if (to.startsWith("/")) {
        return (
            <NextLink href={to} {...props}>
                {children}
            </NextLink>
        )
    }

    return (
        <a {...props} href={to} target="_blank" rel="noopener noreferrer">
            {children}
        </a>
    )
}

export default Link
