import { Build, Inventory } from 'pixel_combats/room';

// разрешаем все что можно для редактора
export function set_editor_inventory() {
    var roomInventory = Inventory.GetContext();
    roomInventory.Main.Value = false;
    roomInventory.Secondary.Value = false;
    roomInventory.Melee.Value = true;
    roomInventory.Explosive.Value = false;
    roomInventory.Build.Value = true;
    roomInventory.BuildInfinity.Value = true;
}

export function set_editor_options() {
    Build.GetContext().Pipette.Value = true;
    Build.GetContext().FloodFill.Value = true;
    Build.GetContext().FillQuad.Value = true;
    Build.GetContext().RemoveQuad.Value = true;
    Build.GetContext().BalkLenChange.Value = true;
    Build.GetContext().FlyEnable.Value = true;
    Build.GetContext().SetSkyEnable.Value = true;
    Build.GetContext().GenMapEnable.Value = true;
    Build.GetContext().ChangeCameraPointsEnable.Value = true;
    Build.GetContext().QuadChangeEnable.Value = true;
    Build.GetContext().BuildModeEnable.Value = true;
    Build.GetContext().CollapseChangeEnable.Value = true;
    Build.GetContext().RenameMapEnable.Value = true;
    Build.GetContext().ChangeMapAuthorsEnable.Value = true;
    Build.GetContext().LoadMapEnable.Value = true;
    Build.GetContext().ChangeSpawnsEnable.Value = true;
    Build.GetContext().BuildRangeEnable.Value = true;
}