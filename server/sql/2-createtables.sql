USE [InsightsDatabase]
GO

/****** Object:  Table [dbo].[Patients]    Script Date: 4/26/2017 9:36:25 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
DROP TABLE IF EXISTS [dbo].[Patients];
GO
CREATE TABLE [dbo].[Patients](
	[PatientId] [varchar](255) NOT NULL,
	[LastName] [varchar](255) NOT NULL,
	[FirstName] [varchar](255) NOT NULL,
	[MRN] [varchar](255) NOT NULL,		
) ON [PRIMARY]
GO

/****** Object:  Table [dbo].[ControlledSubstances]    Script Date: 4/26/2017 9:36:25 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
DROP TABLE IF EXISTS [dbo].[ControlledSubstances];
GO
CREATE TABLE [dbo].[ControlledSubstances](
	[PatientId] [varchar](255) NOT NULL,
	[ControlledSubstanceId] [varchar](255) NOT NULL,
	[MedicationCategory] [varchar](255) NOT NULL,
	[MedicationName] [varchar](255) NOT NULL,
	[DatePrescribed] [datetime] NOT NULL,
	[PrescribedByDoctor] [varchar](255) NOT NULL
) ON [PRIMARY]
GO

DROP TABLE IF EXISTS [dbo].[ControlledSubstanceItems];
GO
CREATE TABLE [dbo].[ControlledSubstanceItems](
	[PatientId] [varchar](255) NOT NULL,
	[ControlledSubstanceId] [varchar](255) NOT NULL,
	[ControlledSubstanceItemId] [varchar](255) NOT NULL,
	[ItemName] [varchar](255) NOT NULL,
	[DatePrescribed] [datetime] NOT NULL,
	[PrescribedByDoctor] [varchar](255) NOT NULL
) ON [PRIMARY]
GO

/****** Object:  Table [dbo].[Insights]    Script Date: 4/26/2017 9:36:25 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
DROP TABLE IF EXISTS [dbo].[Insights];
GO
CREATE TABLE [dbo].[Insights](
	[PatientId] [varchar](50) NOT NULL,
	[InsightId] [varchar](255) NOT NULL,
	[InsightCategory] [varchar](255) NOT NULL,
	[InsightName] [varchar](255) NOT NULL,
	[InsightText] [varchar](255) NOT NULL,
	[DateCreated] [datetime] NOT NULL,
 CONSTRAINT [PK_Insights] PRIMARY KEY CLUSTERED 
(
	[PatientId] ASC,
	[InsightId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO

SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
DROP TABLE IF EXISTS [dbo].[InsightItems];
GO
CREATE TABLE [dbo].[InsightItems](
	[PatientId] [varchar](50) NOT NULL,
	[InsightId] [varchar](255) NOT NULL,
	[InsightItemId] [varchar](255) NOT NULL,
	[ItemName] [varchar](255) NOT NULL,
	[ItemText] [varchar](255) NOT NULL,
	[DateCreated] [datetime] NOT NULL,
 CONSTRAINT [PK_InsightItems] PRIMARY KEY CLUSTERED 
(
	[PatientId] ASC,
	[InsightId] ASC,
	[InsightItemId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO

DROP TABLE IF EXISTS [dbo].[InsightLinks];
GO

CREATE TABLE [dbo].[InsightLinks](
	[PatientId] [varchar](50) NOT NULL,
	[InsightId] [varchar](255) NOT NULL,
	[InsightLinkId] [varchar](255) NOT NULL,
	[LinkName] [varchar](255) NOT NULL,
	[LinkUrl] [varchar](255) NOT NULL,
	[DateCreated] [datetime] NOT NULL,
 CONSTRAINT [PK_InsightLinks] PRIMARY KEY CLUSTERED 
(
	[PatientId] ASC,
	[InsightId] ASC,
	[InsightLinkId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO

/****** Object:  Table [dbo].[Registries]    Script Date: 4/26/2017 9:36:25 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
DROP TABLE IF EXISTS [dbo].[Registries];
GO

CREATE TABLE [dbo].[Registries](
	[PatientId] [varchar](255) NOT NULL,
	[RegistryName] [varchar](255) NOT NULL,
	[DateAdded] [datetime] NOT NULL
) ON [PRIMARY]

GO
