import { login } from "./actions";

export default function LoginPage() {
    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <h1 className="text-2xl font-bold mb-4">Enter the preview password</h1>
            <form className="flex flex-col items-center justify-center" action={login}>
                <input className="border-2 border-gray-300 rounded-md p-2 mb-4" type="password" name="previewPassword" placeholder="Password" required/>
                <button className="bg-blue-500 text-white p-2 rounded-md w-full" type="submit">Login</button>
            </form>

            <p className="text-sm text-gray-500 mt-4">Don't have a password? Contact the administrator.</p>
        </div>
    );
}