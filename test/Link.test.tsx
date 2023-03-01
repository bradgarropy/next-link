import {render, screen} from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import React from "react"

import Link from "../src"

test("shows html link", async () => {
    const onClick = jest.fn()

    render(
        <Link to="https://example.com" className="link" onClick={onClick}>
            Example
        </Link>,
    )

    const nextLink = screen.getByText("Example")

    expect(nextLink).toHaveAttribute("target", "_blank")
    expect(nextLink).toHaveAttribute("rel", "noopener noreferrer")
    expect(nextLink).toHaveClass("link")

    await userEvent.click(nextLink)
    expect(onClick).toHaveBeenCalledTimes(1)
})

test("shows next link", async () => {
    const onClick = jest.fn()

    render(
        <Link to="/example" className="link" onClick={onClick}>
            Example
        </Link>,
    )

    const nextLink = screen.getByText("Example")

    expect(nextLink).not.toHaveAttribute("target", "_blank")
    expect(nextLink).not.toHaveAttribute("rel")
    expect(nextLink).toHaveClass("link")
})
