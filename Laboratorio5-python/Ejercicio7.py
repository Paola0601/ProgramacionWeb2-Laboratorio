from interpreter import draw
from chessPictures import *

"""Creamos las fichas"""
#Creamos una fila de peones negros y blancos
filaPeonesNegros=pawn.horizontalRepeat(8).negative()
filaPeonesBlancos=pawn.horizontalRepeat(8)
#CReamos fila de piezas negras y blancas 
filaPiezasBlanco=rock.join(knight).join(bishop).join(queen).join(king).join(bishop).join(knight).join(rock)
filaPiezasNegro=filaPiezasBlanco.negative()
#unimos los peones con las otras fichas de su mismo color
fichasCompletasNegras=filaPeonesNegros.up(filaPiezasNegro)
fichasCompletaBlancas=filaPiezasBlanco.up(filaPeonesBlancos)

"""Creamos el Tablero"""
#creamos una cuadriculaNegra
cuadriculaNegra=square.negative()
#Creamos una  fila de cuadrados que empiece por blanco y despues  negro
empiezaNegro= cuadriculaNegra.join(square)
#Creamos una fila de 8 cuadrados, repitiendo filaBase 4 veces
filaNegro=empiezaNegro.horizontalRepeat(4)
#Creamos una  fila de cuadrados que empiece por negro  y despues  blanco
empiezaBlanco = square.join(cuadriculaNegra)
#Creamos una fila de 8 cuadrados, repitiendo filaBase 4 veces
filaBlanco=empiezaBlanco.horizontalRepeat(4)
#Juntamos las filas para hacer el tablero
unionFilas = filaNegro.up(filaBlanco)
#Repetimos la union de filas 2 veces
mitadConNegras = unionFilas.verticalRepeat(2)

"""Unimos las fichas con su tablero"""
#Unimos las fichas con suTablero
fichasyTableroNegro=mitadConNegras.under(fichasCompletasNegras)
fichasyTableroBlanco=mitadConNegras.under(fichasCompletaBlancas)
##Graficamos la mitad de cada tablero con sus fichas
mitadConNegras=unionFilas.up(fichasyTableroNegro)
mitadConBlancas=fichasyTableroBlanco.up(unionFilas)
#hacemos el tablero Final
tableroFinal=mitadConBlancas.up(mitadConNegras)
draw(tableroFinal)

