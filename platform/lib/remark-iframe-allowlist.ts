/**
 * rehype plugin: allow only <iframe> from /content/module01_ai/interactives/
 *
 * - Strips iframes whose src doesn't start with the allowed prefix
 * - Adds loading="lazy" and title to remaining iframes
 * - Must run BEFORE rehype-sanitize
 *
 * Allowed patterns:
 *   /interactives/demo_*.html        (Next.js public/ -- primary)
 *   /content/module01_ai/interactives/ (legacy MkDocs path)
 */
import { visit } from "unist-util-visit"
import type { Root, Element } from "hast"

const ALLOWED_PREFIXES = ["/interactives/", "/content/module01_ai/interactives/"]

export function rehypeIframeAllowlist() {
  return (tree: Root) => {
    visit(tree, "element" as const, (node, index, parent) => {
      if (node.tagName !== "iframe") return

      const src = (node.properties?.src as string) ?? ""

      const allowed = ALLOWED_PREFIXES.some((p) => src.startsWith(p))
      if (!allowed) {
        // Remove disallowed iframe, replace with a notice
        if (parent && index != null) {
          const replacement: Element = {
            type: "element",
            tagName: "p",
            properties: { className: ["iframe-blocked-notice"] },
            children: [
              {
                type: "text",
                value: `[iframe bloqueado: ${src} — solo se permiten iframes de la coleccion de demos]`,
              },
            ],
          }
          parent.children.splice(index, 1, replacement)
        }
        return
      }

      // Add loading="lazy" and responsive wrapper attributes
      node.properties = node.properties ?? {}
      node.properties.loading = "lazy"
      node.properties.title = node.properties.title ?? "Demo interactivo del Módulo 1"
      node.properties.allowfullscreen = true

      // Wrap in a responsive container div
      if (parent && index != null) {
        const wrapper: Element = {
          type: "element",
          tagName: "div",
          properties: { className: ["iframe-responsive-wrapper"] },
          children: [structuredClone(node)],
        }
        parent.children.splice(index, 1, wrapper)
      }
    })
  }
}


