import NextLink from "next/link"
import React, {FC} from "react"

type LinkProps = {
    to: string
    className?: string
}

const Link: FC<LinkProps> = ({to, className, children}) => {
    if (to.startsWith("/")) {
        return (
            <NextLink href={to} passHref>
                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                <a className={className}>{children}</a>
            </NextLink>
        )
    }

    return (
        <a
            href={to}
            className={className}
            target="_blank"
            rel="noopener noreferrer"
        >
            {children}
        </a>
    )
}

export default Link
