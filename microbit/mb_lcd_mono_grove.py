# (c) 2021 Christophe Gueneau
from microbit import *
import time

class mb_lcd_mono_grove():
    def __init__(self):
        self.disp_func = 0x04 | 0x08
        time.sleep_ms(50)
        self.cmd(0x20 | self.disp_func)
        time.sleep_us(4500)
        self.cmd(0x20 | self.disp_func)
        time.sleep_us(150)
        self.cmd(0x20 | self.disp_func)
        self.cmd(0x20 | self.disp_func)
        self.disp_ctrl = 0x04 | 0x00 | 0x00
        self.display1(True)
        self.clear()
        self.disp_mode = 0x02 | 0x00
        self.cmd(0x04 | self.disp_mode)

    def cmd(self, command):
        assert command >= 0 and command < 256
        val = bytes((0x80, command))
        i2c.write(0x3e, val)

    def write_char(self, c):
        assert c >= 0 and c < 256
        val = bytes((0x40, c))
        i2c.write(0x3e, val)

    def write(self, text):
        text = str(text)
        for char in text:
            self.write_char(ord(char))

    def setCursor(self, col, row):
        col = (col | 0x80) if row == 0 else (col | 0xc0)
        self.cmd(col)

    def display1(self, state):
        if state:
            self.disp_ctrl |= 0x04
            self.cmd(0x08  | self.disp_ctrl)
        else:
            self.disp_ctrl &= ~0x04
            self.cmd(0x08  | self.disp_ctrl)

    def clear(self):
        self.cmd(0x01)
        time.sleep_ms(2)


