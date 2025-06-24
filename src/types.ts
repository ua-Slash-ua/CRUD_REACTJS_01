export type Book = {
    id: number,
    title: string,
    author: string,
    available: boolean
}

export type HeaderProps = {
    isAuth: boolean,
    setIsAuth?: (value: (((prevState: boolean) => boolean) | boolean)) => void
}