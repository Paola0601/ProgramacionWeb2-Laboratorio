from interpreter import draw
from chessPictures import *


#creamos una cuadriculaNegra
cuadriculaNegra=square.negative()

#Creamos una  fila de cuadrados que tenga negro y blanco
fila1 = square.join(cuadriculaNegra)
draw(fila1)