<template>
    <button>
        <slot></slot>
    </button>
</template>

<style scoped lang="scss">
button {
    background-color: #02A79D;
    padding: 1.5rem;
    color: #222a3d;
    font-weight: 700;
    line-height: 0.2rem;
    border: 0;
    border-radius: 1rem;
    font-size: 1rem;
    letter-spacing: 0.2em;
}

button:hover {
    opacity: 0.8;
}
</style>