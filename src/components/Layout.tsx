import { JSXElement } from "solid-js"

interface LayoutProps{
  children: JSXElement
}

export function Layout(props: LayoutProps) {
  return(
    <div class="flex p-12 min-h-screen justify-center bg-gray-500">
      {props.children}
    </div>
  )
}