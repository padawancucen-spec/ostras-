basic.forever(function () {
    basic.showIcon(IconNames.House)
    nezhaV2.setComboMotor(nezhaV2.MotorPostion.M1, nezhaV2.MotorPostion.M2)
    if (PlanetX_Basic.TrackbitState(PlanetX_Basic.TrackbitStateType.Tracking_State_5)) {
        nezhaV2.comboStop()
        nezhaV2.comboMove(50, nezhaV2.VerticallDirection.Down, 720, nezhaV2.DistanceAndAngleUnit.Degree)
        nezhaV2.move(nezhaV2.MotorPostion.M1, 50, nezhaV2.MovementDirection.CW, 390, nezhaV2.SportsMode.Degree)
    } else {
        nezhaV2.comboRun(50, nezhaV2.VerticallDirection.Up)
    }
})
