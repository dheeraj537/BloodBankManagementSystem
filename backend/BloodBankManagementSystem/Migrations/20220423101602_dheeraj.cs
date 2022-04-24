using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace BloodBankManagementSystem.Migrations
{
    public partial class dheeraj : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Admins",
                columns: table => new
                {
                    AdminID = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    AdminPassword = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Message = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Admins", x => x.AdminID);
                });

            migrationBuilder.CreateTable(
                name: "BloodBanks",
                columns: table => new
                {
                    BloodBankID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    UserID = table.Column<int>(type: "int", nullable: false),
                    Password = table.Column<int>(type: "int", nullable: false),
                    BloodBankName = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Address = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    ContactNumber = table.Column<int>(type: "int", nullable: false),
                    BloodUnits = table.Column<int>(type: "int", nullable: false),
                    City = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_BloodBanks", x => x.BloodBankID);
                });

            migrationBuilder.CreateTable(
                name: "BloodDonationCamps",
                columns: table => new
                {
                    BloodDonationCampID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    CampName = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Adress = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    City = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    BloodBankID = table.Column<int>(type: "int", nullable: false),
                    CampStartDate = table.Column<DateTime>(type: "datetime2", nullable: false),
                    CampEndDate = table.Column<DateTime>(type: "datetime2", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_BloodDonationCamps", x => x.BloodDonationCampID);
                });

            migrationBuilder.CreateTable(
                name: "BloodDonorDonations",
                columns: table => new
                {
                    BloodDonationID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    BloodDonorID = table.Column<int>(type: "int", nullable: false),
                    BloodDonationDate = table.Column<DateTime>(type: "datetime2", nullable: false),
                    NumberofBottles = table.Column<int>(type: "int", nullable: false),
                    Weight = table.Column<int>(type: "int", nullable: false),
                    HBCount = table.Column<int>(type: "int", nullable: false),
                    BloodGroup = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    BloodBankID = table.Column<int>(type: "int", nullable: false),
                    ExpiryDate = table.Column<DateTime>(type: "datetime2", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_BloodDonorDonations", x => x.BloodDonationID);
                });

            migrationBuilder.CreateTable(
                name: "Blooddonors",
                columns: table => new
                {
                    BloodDonorID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    FirstName = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    LastName = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Address = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    City = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    MobileNo = table.Column<int>(type: "int", nullable: false),
                    BloodGroup = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Blooddonors", x => x.BloodDonorID);
                });

            migrationBuilder.CreateTable(
                name: "bloods",
                columns: table => new
                {
                    Funkey = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    BloodBankID = table.Column<int>(type: "int", nullable: false),
                    BloodGroup = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    NumberOfBottles = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_bloods", x => x.Funkey);
                });

            migrationBuilder.CreateTable(
                name: "Hospital",
                columns: table => new
                {
                    HospitalID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    HospitalName = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Address = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    City = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    ContactNo = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Hospital", x => x.HospitalID);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Admins");

            migrationBuilder.DropTable(
                name: "BloodBanks");

            migrationBuilder.DropTable(
                name: "BloodDonationCamps");

            migrationBuilder.DropTable(
                name: "BloodDonorDonations");

            migrationBuilder.DropTable(
                name: "Blooddonors");

            migrationBuilder.DropTable(
                name: "bloods");

            migrationBuilder.DropTable(
                name: "Hospital");
        }
    }
}
