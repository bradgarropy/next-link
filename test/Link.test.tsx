import {render, screen} from "@testing-library/react"
import React from "react"

import Link from "../src"

test("shows html link", () => {
    render(<Link to="https://example.com">Example</Link>)

    expect(screen.getByText("Example")).toHaveAttribute("target", "_blank")

    expect(screen.getByText("Example")).toHaveAttribute(
        "rel",
        "noopener noreferrer",
    )
})

test("shows next link", () => {
    render(<Link to="/example">Example</Link>)

    expect(screen.getByText("Example")).not.toHaveAttribute("target", "_blank")
    expect(screen.getByText("Example")).not.toHaveAttribute("rel")
})
