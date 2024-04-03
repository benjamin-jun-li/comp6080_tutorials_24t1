export const BaseForm = ({children, submit}) => {
    return (
        <form className="" onSubmit={submit}>
            {children}
        </form>
    );
}
