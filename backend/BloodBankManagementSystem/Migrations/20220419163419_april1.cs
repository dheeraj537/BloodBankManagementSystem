using Microsoft.EntityFrameworkCore.Migrations;

namespace BloodBankManagementSystem.Migrations
{
    public partial class april1 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "AdminPassWord",
                table: "Admins",
                newName: "AdminPassword");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "AdminPassword",
                table: "Admins",
                newName: "AdminPassWord");
        }
    }
}
