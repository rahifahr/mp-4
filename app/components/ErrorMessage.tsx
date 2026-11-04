type ErrorMessageProps = {
    message: string;
};

export default function ErrorMessage({ message }: ErrorMessageProps) {
    return (
        <p role="alert" className="error-message">
            {message}
        </p>
    );
}