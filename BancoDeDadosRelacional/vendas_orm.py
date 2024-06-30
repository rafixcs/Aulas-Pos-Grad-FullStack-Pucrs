import sqlalchemy as sqla

engine = sqla.create_engine("sqlite:///sales.db")

import sqlalchemy.orm as orm

base = orm.declarative_base()

# Tabela cliente
class Client(base):
    __tablename__ = 'client'
    
    cpf = sqla.Column(sqla.CHAR(14), primary_key=True, index=True)
    nome = sqla.Column(sqla.VARCHAR(100), nullable=False)
    email = sqla.Column(sqla.VARCHAR(50), nullable=False)
    genero = sqla.Column(sqla.VARCHAR(1))
    salario = sqla.Column(sqla.DECIMAL(10,2))
    data_aniversario =  sqla.Column(sqla.DATETIME)
    bairro = sqla.Column(sqla.VARCHAR(50))
    cidade = sqla.Column(sqla.VARCHAR(50))
    uf = sqla.Column(sqla.CHAR(2))
    
# Tabela fornecedor
class Furnisher(base):
    __tablename__ = 'furnisher'
    
    furnisher_id = sqla.Column(sqla.INTEGER, primary_key=True, index=True)
    costum_name = sqla.Column(sqla.VARCHAR(50), nullable=False)
    social_reason = sqla.Column(sqla.VARCHAR(50), nullable=False)
    uf = sqla.Column(sqla.CHAR(2), nullable=False)

# Tabela Produto
class Product(base):
    __tablename__ = 'product'
    bar_code = sqla.Column(sqla.INTEGER, primary_key=True, index=True)
    furnisher_id = sqla.Column(sqla.INTEGER, sqla.ForeignKey('furnisher.furnisher_id', ondelete='NO ACTION', onupdate='CASCADE'), index=True)
    description = sqla.Column(sqla.VARCHAR(100), nullable=False)
    gender = sqla.Column(sqla.CHAR(2), nullable=False)
    
    
# Tabela venda
class Vendor(base):
    __tablename__ = 'vendor'
    
    vendor_id = sqla.Column(sqla.INTEGER, primary_key=True, index=True)
    cpf = sqla.Column(sqla.CHAR(14), nullable=False)
    nome = sqla.Column(sqla.VARCHAR(100), nullable=False)
    email = sqla.Column(sqla.VARCHAR(50), nullable=False)
    genero = sqla.Column(sqla.VARCHAR(1))

# Tabela vendas
class Sales(base):
    __tablename__ = 'sales'
    
    sale_id = sqla.Column(sqla.INTEGER, primary_key=True, index=True)
    cpf = sqla.Column(sqla.CHAR(14), sqla.ForeignKey('client.cpf', ondelete='NO ACTION', onupdate='CASCADE'), index=True)
    vendor_id = sqla.Column(sqla.INTEGER,  sqla.ForeignKey('vendor.vendor_id', ondelete='NO ACTION', onupdate='CASCADE'), index=True)
    bar_code = sqla.Column(sqla.INTEGER,  sqla.ForeignKey('product.bar_code', ondelete='NO ACTION', onupdate='CASCADE'), index=True)
    
try:
    base.metadata.create_all(engine)    # Cria as tabelas
    print('Tabelas criadas')
except ValueError:
    ValueError()
    
    