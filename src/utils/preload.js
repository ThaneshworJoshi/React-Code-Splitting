import React from "react";

export default function preload(componentToImport) {
    const Component = React.lazy(componentToImport);

    Component.preload = componentToImport

    return Component
}


// const Price = preload(() => import('./Price'))