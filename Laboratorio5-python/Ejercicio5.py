
from interpreter import draw
from chessPictures import *

#creamos una cuadriculaNegra
cuadriculaNegra=square.negative()

#Creamos una  fila de cuadrados que tenga blanco y negro
filaBase = cuadriculaNegra.join(square)

#Creamos una fila de 8 cuadrados, repitiendo filaBase 4 veces
filaCompleta=filaBase.horizontalRepeat(4)
draw(filaCompleta)