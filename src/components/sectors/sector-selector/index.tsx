import {FC} from "react";
import {Typography} from "@mui/material";
import styles from './index.module.scss'

interface SectorSelectorProps {}

export const SectorSelector: FC<SectorSelectorProps> = (props) => {

  const fakeSectorData = [
    // {
    //   sectorId: "rossum",
    //   title: "罗萨姆",
    //   subtitle: "Rossum",
    //   overline: "人工智能扇区",
    //   stages: [
    //     {
    //       stageId: "rossum_01-01",
    //       name: "择路",
    //       code: "STAGE 1-1"
    //     },
    //     {
    //       stageId: "rossum_01-01",
    //       name: "择路",
    //       code: "STAGE 1-1"
    //     }
    //   ]
    // },
    {
      sectorId: "training",
      title: "潜能特训",
      categories: [
        {
          categoryId: "training_sniper",
          name: "潜能特训：射手",
          stages: [
            {
              stageId: "training_sniper-01",
              name: "EP01",
              code: "EP01"
            },
            {
              stageId: "training_sniper-01",
              name: "EP02",
              code: "EP02"
            }
          ]
        },
        {
          categoryId: "training_specialists",
          name: "潜能特训：特种",
          stages: [
            {
              stageId: "training_specialists-01",
              name: "EP01",
              code: "EP01"
            },
            {
              stageId: "training_specialists-01",
              name: "EP02",
              code: "EP02"
            }
          ]
        }
      ]
    }
  ]

  const sectorData = fakeSectorData

  return (
    <ol>
      {
        sectorData.map(sector => {
          return sector.categories.map(category => {
            return (
              <li key={sector.sectorId} className={styles['section']}>
                <Typography variant="h4" component="h4" className={styles['heading']}>
                  {category.name}
                </Typography>
                {
                  category.stages.map(stage => (
                    <div key={stage.stageId} className={styles['btn']}>
                      {stage.code}
                    </div>
                  ))
                }
              </li>
            )
          })
        })
      }
    </ol>
  )
}