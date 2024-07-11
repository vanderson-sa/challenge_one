export async function listProducts() {
    try {
        const response = await fetch("http://localhost:3000/produtos");
        return await response.json();
    } catch (error) {
        console.error("Erro ao listar produtos:", error);
        throw error;
    }
}

export async function addProduct(product) {
    try {
        await fetch("http://localhost:3000/produtos", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(product),
        });
    } catch (error) {
        console.error("Erro ao adicionar produto:", error);
        throw error;
    }
}

export async function deleteProduct(productId) {
    try {
        await fetch(`http://localhost:3000/produtos/${productId}`, {
            method: "DELETE",
        });
    } catch (error) {
        console.error("Erro ao deletar produto:", error);
        throw error;
    }
}
