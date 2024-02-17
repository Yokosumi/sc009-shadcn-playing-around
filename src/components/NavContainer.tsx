interface NavContainerProps {
    children: React.ReactNode
}

export const NavContainer: React.FC<NavContainerProps> = ({ children }) => {
    return (
        <>
            <div className="flex gap-4 justify-end border border-white p-3">
                {children}
            </div>
        </>
    )
}
