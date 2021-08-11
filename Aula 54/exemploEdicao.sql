-- INSERT INTO produtos VALUES (1, 'caneta', 2.5);
-- INSERT INTO produtos (nome,preco) VALUES
--     ('borracha', 0.5),
--     ('grafite', 0.5),
--     ('régua', 1);

-- UPDATE produtos SET preco = 1 WHERE id = 4
-- UPDATE produtos SET preco = 20; <= Ta erradão isso.

-- DELETE FROM produtos;

-- INSERT INTO produtos VALUES (1, 'Lápis', 1);
-- INSERT INTO pedidos (total_pedido) VALUES (10);
-- INSERT INTO pedidos_produtos VALUES (1, 1, 10);

DELETE FROM pedidos_produtos;
DELETE FROM produtos WHERE id = 1;
