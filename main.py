def on_forever():
    basic.show_icon(IconNames.YES)
    if PlanetX_Basic.check_color(PlanetX_Basic.ColorList.WHITE):
        nezhaV2.set_combo_motor(nezhaV2.MotorPostion.M1, nezhaV2.MotorPostion.M2)
        nezhaV2.combo_run(50, nezhaV2.VerticallDirection.UP)
    else:
        nezhaV2.combo_stop()
basic.forever(on_forever)
