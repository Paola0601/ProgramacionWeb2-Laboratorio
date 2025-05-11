from interpreter import draw
from chessPictures import *

#creamos una cuadriculaNegra
cuadriculaNegra=square.negative()
#Creamos una fila de peones negros y blancos
filaPeonesNegros=pawn.horizontalRepeat(8).negative()
filaPeonesBlancos=pawn.horizontalRepeat(8)
#CReamos fila de piezas negras y blancas 
filaPiezasBlanco=rock.join(knight).join(bishop).join(queen).join(king).join(bishop).join(knight).join(rock)
filaPiezasNegro=filaPiezasBlanco.negative()
#unimos los peones con las otras fichas de su mismo color
fichasCompletas=filaPeonesNegros.up(filaPiezasNegro)
#Creamos una  fila de cuadrados que tenga blanco y negro
empiezaNegro= cuadriculaNegra.join(square)

#Creamos una fila de 8 cuadrados, repitiendo filaBase 4 veces
filaNegro=empiezaNegro.horizontalRepeat(4)
#Creamos una  fila de cuadrados que tenga negro y blanco
empiezaBlanco = square.join(cuadriculaNegra)

#Creamos una fila de 8 cuadrados, repitiendo filaBase 4 veces
filaBlanco=empiezaBlanco.horizontalRepeat(4)
#Juntamos las filas para hacer el tablero
unionFilas = filaNegro.up(filaBlanco)
#Repetimos la union de filas 2 veces
mitadTablero = unionFilas.verticalRepeat(2)
unimosFichasyTablero1=mitadTablero.under(fichasCompletas)
mitadTablero=unionFilas.up(unimosFichasyTablero1)
otraMitad=unimosFichasyTablero1.up(unionFilas).negative()

tableroFinal=otraMitad.up(mitadTablero)
draw(tableroFinal)


#under