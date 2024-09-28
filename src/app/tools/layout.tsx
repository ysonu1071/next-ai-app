

export default function ToolsLayout({ children }: { children: React.ReactNode }) {

    return <div>
        <div>
            <h1 className="font-bold text-3xl">Tools layout page</h1>
        </div>
        <div>
            {children}
        </div>
    </div>
}