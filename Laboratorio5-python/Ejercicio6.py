from interpreter import draw
from chessPictures import *
#creamos una cuadriculaNegra
cuadriculaNegra=square.negative()

#Creamos una  fila de cuadrados que tenga blanco y negro
empiezaNegro= cuadriculaNegra.join(square)

#Creamos una fila de 8 cuadrados, repitiendo filaBase 4 veces
filaNegro=empiezaNegro.horizontalRepeat(4)
#Creamos una  fila de cuadrados que tenga negro y blanco
empiezaBlanco = square.join(cuadriculaNegra)

#Creamos una fila de 8 cuadrados, repitiendo filaBase 4 veces
filaBlanco=empiezaBlanco.horizontalRepeat(4)

draw(filaNegro)
