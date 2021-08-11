-- CREATE TABLE IF NOT EXISTS marca (
-- 	id SERIAL PRIMARY KEY,
-- 	nome text NOT NULL UNIQUE
-- );

-- CREATE TABLE IF NOT EXISTS produto (
-- 	id SERIAL PRIMARY KEY,
-- 	nome text NOT NULL UNIQUE,
-- 	id_marca integer NOT NULL REFERENCES marca
-- );

-- INSERT INTO marca (nome) VALUES
-- ('Apple'), ('Samsung'), ('Xiaomi');

-- INSERT INTO produto (nome, id_marca) VALUES
-- ('Galaxy A32', 2),
-- ('Galaxy A12', 2),
-- ('Iphone 11', 1);

-- SELECT * FROM marca;
-- SELECT * FROM produto;

-- SELECT m.nome marca_nome, p.nome AS produto_nome 
-- FROM marca m
-- INNER JOIN produto p ON p.id_marca = m.id;

-- INSERT INTO produtos (tipo, preco) VALUES 
-- ('Lapis', 1),
-- ('Caneta',2.5),
-- ('Régua', 3);

-- INSERT INTO pedidos (total_pedido) VALUES
-- (10), (16), (30), (5);

-- INSERT INTO pedidos_produtos VALUES
-- (1, 1, 10),
-- (2, 2, 4),
-- (3, 3, 10),
-- (3, 2, 2);

SELECT ped.id, sum(prod.preco * pp.quantidade) total_produto
FROM pedidos_produtos pp
INNER JOIN pedidos ped ON ped.id = pp.id_pedido
INNER JOIN produtos prod ON prod.id = pp.id_produto
GROUP BY ped.id;

SELECT * FROM pedidos WHERE total_pedido BETWEEN 10 AND 16;
SELECT * FROM pedidos WHERE total_pedido IN (10, 16, 25);

SELECT * FROM produtos WHERE tipo ILIKE 'L%';
SELECT * FROM produtos WHERE tipo ILIKE '%L%';
SELECT * FROM produtos WHERE tipo ILIKE 'L____';


CREATE TABLE IF NOT EXISTS vendas (
	id SERIAL PRIMARY KEY,
	nome_vendedor text NOT NULL,
	quantidade integer NOT NULL,
	produto text NOT NULL,
	cidade text NOT NULL
);

-- INSERT INTO vendas (nome_vendedor, quantidade, produto, cidade) VALUES 
-- ('Jorge', 10, 'Mouse', 'São Paulo'),
-- ('Ana', 6, 'Teclado', 'Rio de Janeiro'),
-- ('Mario', 23, 'Mouse', 'Blumenau'),
-- ('Felipe', 25, 'Webcam', 'Blumenau'),
-- ('João', 2, 'Teclado', 'Recife'),
-- ('Pedro', 3, 'Monitor', 'São Paulo'),
-- ('João', 5, 'Monitor', 'Rio de Janeiro');

SELECT cidade, sum(quantidade) 
FROM vendas
GROUP BY cidade;

SELECT produto, sum(quantidade)
FROM vendas
GROUP BY produto;

SELECT nome_vendedor, sum(quantidade) total_vendas
FROM vendas
GROUP BY nome_vendedor
ORDER BY total_vendas DESC;