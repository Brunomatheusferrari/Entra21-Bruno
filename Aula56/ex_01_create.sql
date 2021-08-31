DROP TABLE IF EXISTS contrato;
DROP TABLE IF EXISTS imovel;
DROP TABLE IF EXISTS proprietario;
DROP TABLE IF EXISTS locatario;


CREATE TABLE IF NOT EXISTS imovel (
	id SERIAL PRIMARY KEY,
	numero_quartos Integer NOT NULL,
	numero_banheiros Integer,
	area Numeric NOT NULL,
	pscina Boolean,
	churrasqueira Boolean
);

CREATE TABLE IF NOT EXISTS proprietario (
	id SERIAL PRIMARY KEY,
	telefone Numeric NOT NULL,
	nome Text NOT NULL,
	cpf Numeric NOT NULL,
	endereco Text NOT NULL
);

CREATE TABLE IF NOT EXISTS locatario (
	id SERIAL PRIMARY KEY,
		nome Text NOT NULL,
		cpf Numeric NOT NULL,
		telefone Numeric NOT NULL,
		endereco Text NOT NULL
);

CREATE TABLE IF NOT EXISTS contrato (
	id SERIAL PRIMARY KEY,
	data_inicio Numeric NOT NULL,
	data_termino Numeric NOT NULL,
	valor Numeric NOT NULL,
	vencimento numeric NOT NULL,
	observacoes Text,
	id_imovel integer NOT NULL REFERENCES imovel,
	id_prorietario integer NOT NULL REFERENCES proprietario,
	id_locatario integer NOT NULL REFERENCES locatario
);