import { useNavigate } from "react-router";
import ProductForm from "../components/ProductForm";

export default function CreatePage() {
  const navigate = useNavigate();

  async function handleSubmit() {
    // TODO: Implement POST with fetch.
    navigate("/");
  }

  return (
    <main className="app">
      <h1 className="page-title">Create Product</h1>
      <ProductForm onSubmit={handleSubmit} />
    </main>
  );
}
