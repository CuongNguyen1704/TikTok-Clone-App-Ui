import Header from "@/components/Layout/components/Header";

function DefaultLayout({children}: {children: React.ReactNode}) {
    return (
        <div>
            <Header />
            <div className="container">
                <div className="content">
                    {children}
                </div>
            </div>
            
        </div>
    );
}

export default DefaultLayout;