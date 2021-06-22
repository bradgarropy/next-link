import NextLink, {LinkProps as NextLinkProps} from "next/link"
import React, {FC} from "react"

type LinkProps = {
    to: string
} & Partial<NextLinkProps>

const Link: FC<LinkProps> = ({to, children, ...props}) => {
    if (to.startsWith("/")) {
        return (
            <NextLink {...props} href={to}>
                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                <a>{children}</a>
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
