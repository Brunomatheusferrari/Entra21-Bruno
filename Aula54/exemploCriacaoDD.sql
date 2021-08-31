CREATE TABLE IF NOT EXISTS pedidos_produtos (
	id_pedido integer,
	id_produto integer,
	quantidade integer NOT NULL,
	PRIMARY KEY (id_pedido, id_produto),
	FOREIGN KEY (id_pedido) REFERENCES pedidos,
	FOREIGN KEY (id_produto) REFERENCES produtos
);